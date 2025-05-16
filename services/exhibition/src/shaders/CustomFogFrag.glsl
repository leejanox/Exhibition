precision mediump float;
varying vec2 vUv;

uniform float uTime;
uniform sampler2D uTexture;

void main() {

    // swirl 중심 계산
    vec2 center = vec2(0.5);
    vec2 p = vUv - center;

    // swirl 각도 (시간에 따라 회전)
    float angle = 0.5 * sin(uTime * 0.5);
    float s = sin(angle);
    float c = cos(angle);

    // 소용돌이 회전 적용
    p = mat2(c, -s, s, c) * p;
    vec2 uvSwirled = center + p;

    vec4 tt = texture2D(uTexture,uvSwirled);

    float gray = dot(tt.rgb, vec3(0.299, 0.587, 0.114));
    float a = smoothstep(0.3, 0.7, gray); // 이 범위 조정 가능

    float fade = smoothstep(0.0, 2.0, uTime); // 2초 동안 서서히 등장
    a *= fade;

    gl_FragColor = vec4(vec3(gray),a);
    if(a < .05) discard;
}