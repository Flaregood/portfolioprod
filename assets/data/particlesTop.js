export default {
  particles: {
    number: {
      value: 137,
      density: {
        enable: true,
        value_area: 1183.721462448409,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 6,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 64.13648243462092,
      color: "#ffffff",
      opacity: 1,
      width: 1.122388442605866,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "top",
      random: true,
      straight: true,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 0,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 548.152118303408,
        size: 308.58934067451116,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 243.62316369040354,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};
