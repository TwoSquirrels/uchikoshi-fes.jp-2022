// SPDX-License-Identifier: CC-BY-NC-4.0

// components
import { NextSeo } from "next-seo";
import Link from "@/components/base/link";
import Image from "@/components/base/image";
// styles
import styles from "./events.module.scss";

const Events = () => {
  return (
    <>
      <NextSeo title="イベント一覧" openGraph={{ title: "イベント" }} />
      <article className={styles.events}>
        <h1>イベント一覧</h1>
        <section>
          <h2>
            <Link href="/map/jhs-f2">講堂</Link>
          </h2>
          <Image
            src="/events/hall.jpeg"
            alt="メロンフラッペ、ディベート、ジャグリング、劇団こぎと"
            layout="responsive"
            height="510"
            width="360"
          />
        </section>
        <section>
          <h2>
            <Link href="/map/arena">アリーナ</Link>
          </h2>
          <Image
            src="/events/arena.jpeg"
            alt="豪華イベント勢揃い！"
            layout="responsive"
            height="510"
            width="360"
          />
        </section>
        <section>
          <h2>
            <Link href="/map/field">グラウンド</Link>
          </h2>
          <Image
            src="/events/field.jpeg"
            alt="野球、サッカー、地学部ロケット、アメフト"
            layout="responsive"
            height="510"
            width="360"
          />
        </section>
      </article>
    </>
  );
};

export default Events;
