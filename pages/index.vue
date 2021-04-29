<template>
  <div>
    <Hero />
    <Slogans />
    <Tech />
    <Services />
    <Projects :projects="projects" />
    <About />
    <Contact />
    <Footer />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const projects = await $content("projects").fetch();

    return { projects };
  },
};
</script>
