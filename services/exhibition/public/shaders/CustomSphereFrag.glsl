varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;

void main() {
    vec3 base = vec3(1.,1.,1.);
    float a = 1.;

    gl_FragColor = vec4(base, a*.4);
}