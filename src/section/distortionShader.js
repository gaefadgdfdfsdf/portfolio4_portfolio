export const vertexShader = `
  varying vec2 vUv;
  varying vec2 vDistortUV;

  void main() {
    vUv = uv;
    vDistortUV = position.xy;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const fragmentShader = `
varying vec2 vUv;
uniform sampler2D uTexture;
uniform vec2 uMouse;
uniform float uTime;

void main() {
  vec2 uv = vUv;

  // 거리 계산
  float dist = distance(uv, uMouse);

  // 왜곡 강도 조절 (기존과 동일)
  float strength = 0.15;
  float radius = 0.3;

  // 부드러운 곡선 효과 적용 (falloff)
  float effect = smoothstep(radius, 0.0, dist);

  // 왜곡 좌표 (기존 방식)
  vec2 distortedUv = uv;
  distortedUv.x += (uMouse.x - uv.x) * effect * strength;
  distortedUv.y += (uMouse.y - uv.y) * effect * strength;

  // UV 범위 벗어나지 않도록 clamp
  distortedUv = clamp(distortedUv, vec2(0.0), vec2(1.0));

  // 채널별 색상 약간씩 분리 (작게!)
  float chromaOffset = 0.005 * effect;

  vec4 colorR = texture2D(uTexture, clamp(distortedUv + vec2(chromaOffset, 0.0), vec2(0.0), vec2(1.0)));
  vec4 colorG = texture2D(uTexture, distortedUv);
  vec4 colorB = texture2D(uTexture, clamp(distortedUv - vec2(chromaOffset, 0.0), vec2(0.0), vec2(1.0)));

  // RGB 채널 합성
  gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
}`;