varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform float uSpeed;

void main() {
    vUv = uv;
    vPosition = position;

    float time = uTime;
    float speed = uSpeed;
    float amplitude = .5;
    float frequency = 1.;
    float phase = .9;

    vec3 pos = vPosition;

    //y
    pos.y += sin(pos.x * frequency + time * speed) * amplitude;
    //z
    pos.y += cos(pos.z * frequency + time * speed * .8) * amplitude * .5;

    vec4 modelPosition = modelViewMatrix * vec4(pos, 1.);
    vec4 projectedPosition = projectionMatrix * modelPosition;

    gl_Position = projectedPosition;
    gl_PointSize = 1.4;
}