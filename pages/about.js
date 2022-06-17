import Layout, { siteTitle } from '../components/layout';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';

export default function about() {
    return(
        <Layout>
            <Head>
            <title>About</title>
            </Head>
            <h1> About Me </h1>
            <section className={utilStyles.headingMd}>
                <p>Hi, I'm <b>Max</b>. I am a cyber security student and want to learn front-end development.</p>
                <p> 
                    Previously I have done some front end, but only simple stuff with html, js and css
                    Some of my interests outside of programming are going to the gym, gaming and making music.
                </p>
                <p>
                    Other languages I like to code in are Python, Java and Golang. You can see some of my previous projects
                    done in these languages on the projects tab, or {' '} <a href="/projects">here</a>.
                </p>
            </section>
        </Layout>
    )
}