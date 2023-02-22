import Section from "components/layout/Section";
import Container from "components/layout/Container";
import SEOHead from "components/seo/seoHead";

import styles from "./style.module.css";

export default function index() {
  return (
    <>
      <SEOHead
        title="About"
        description="this is about page"
        keywords="about"
      ></SEOHead>
      <Section>
        <Container>
          <h1>This is About page</h1>
          <div className={styles.content}></div>
        </Container>
      </Section>
    </>
  );
}
