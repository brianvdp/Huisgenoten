gsap.registerPlugin(ScrollTrigger);
let speed = 100;

/*  SCENE 1 */
let scene1 = gsap.timeline();
ScrollTrigger.create({
    animation: scene1,
    trigger: ".scrollElement",
    start: "top top",
    end: "40% 100%",
    scrub: 1,


});

// Kamer van Ben Parallax
scene1.to("#Tafel", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Gordijn_rails", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Raam_links", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Raam_rechts", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Gordijn_rechts", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Gordijn_links", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Paddel", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Vloerlamp", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Koffie", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#PC", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Schoen_2_vloer", { x: -4 * speed, ease: "power1.in" }, 0)
scene1.to("#Keyboard", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Muis", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Stoel", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Tennisballen", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#TV_Scherm", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Vogel", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Plant", { x: 4 * speed, ease: "power1.in" }, 0)
scene1.to("#Schoen_1_vloer", { x: -4 * speed, ease: "power1.in" }, 0)


// Kamer van kaylee Parallax
scene1.to("#Raam", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Tafel", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#PC_Kaylee", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Bureau_lamp", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Kop", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Kantoor_stoel", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Yoda", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Kat_Oranje", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Kat_Grijs", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Neon_lamp", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Stoel_Kaylee", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Kat_Neus", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Vloerlamp_Kaylee", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Kast", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Kat_Zwart", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#LP_Speler", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Losse_LP_s", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Star_wars_frame", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Frame_Sims", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Schilderij1", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)

// Kamer van Rosa Parallax
scene1.to("#Raam", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Gordijnen", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Printer", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Kat", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Bank", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Kleed", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Bijzettafel", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Tafel_Rosa", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Fotoframes", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Kaars_rosa", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Boeken", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Doos", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Plank", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Kantoorstoel", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Doos_gereedschap", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Schermen", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)


// Kamer van Manouk Parallax
scene1.to("#Plant_Manouk", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Ramen", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Raam_links_manouk", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Foto_frame_typografie", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Frame_Desk_research", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Bank", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Kleed", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Beker", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Vaas", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Vlam_Kaars", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Kaars", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Foto_frame_brainstorm", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Frame_Iso_Woonkamer", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Lamp", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Iso_Frame", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Polaroid", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Boeken_3", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Boeken_2", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Tas", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Camera", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Schermen", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)


// Kamer van Brian Parallax
scene1.to("#lamp_Brian", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Bal", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Plant_Brian", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#tafel_Brian", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Boeken_Brian", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Lamp_Brian", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#bakje", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#Laptop", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#stoel_Brian", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#nike_grijs", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#nike_geel", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#nike_blauw", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#nike_rood", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#plank1", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#plank2", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#plank3", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#plank4", { x: 4 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#nike_logo", { x: -4 * speed, scale: 0.9, ease: "power1.in" }, 0)





















