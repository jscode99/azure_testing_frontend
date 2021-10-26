
import { fetchService } from "../services/fetchServices";
import { CONST } from "../constant";
import styles from "../styles/Home.module.css";

export default function Home({ test }) {
  console.log("test", test);
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <Head>
          <title>Azure Testing</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Testing</h1>

          <div className={styles.grid}>
            {test.map(data => (
              <div className={styles.card}>
                <div className={styles.img}>
                  <Image
                    src={process.env.BASE_URL + data.Image[0].url}
                    alt="image"
                    height="160px"
                    width="160px"
                  />
                </div>
                <h2>{data.Title}</h2>
                <p>{data.Description}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  let testUrl = process.env.BASE_URL + process.env.PATH.test;
  const [test] = await Promise.all([
    await fetchService(testUrl, CONST.API_METHOD.GET),
  ]);

  return {
    props: {
      test,
    },
  };
}
