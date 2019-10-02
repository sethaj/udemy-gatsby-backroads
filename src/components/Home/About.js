import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import img from '../../images/defaultBcg.jpeg'

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>
            Maybe we better talk out here; the observation lounge has turned into a swamp.
          </h4>
          <p>And if I had it to do over again, I would have grabbed the phaser and pointed it at you instead of them. Mr. Worf, you do remember how to fire phasers? Fate protects fools, little children and ships named Enterprise. They were just sucked into space.</p>
          <p>ur neural pathways have become accustomed to your sensory input patterns. You're going to be an interesting companion, Mr. Data. Mr. Crusher, ready a collision course with the Borg ship.</p>
          <button type="button" className="btn-primary">read more</button>
        </article>
      </div>
    </section>
  )
}

export default About
