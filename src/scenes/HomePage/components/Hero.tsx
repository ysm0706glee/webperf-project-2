import s from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={s.container}>
      <img className={s.image} src="bg.jpg" alt="" width="1440" height="700" />
      <div className={s.center}>
        <h1 className={s.title}>Star fighter</h1>
        <a className={s.button} href="/game">
          Start
        </a>
      </div>
    </section>
  );
};

export default Hero;
