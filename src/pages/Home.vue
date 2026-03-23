<template>
  <Section>
    <Inset format>
      <h2>About</h2>
      <p>
        I'm a software developer from Sweden 🇸🇪, currently working at
        <TextLink href="https://www.fortnox.se/" title="Fortnox" />, where we
        help businesses succeed by providing them with the best possible tools.
        Previously, I worked on tools for boards and executives at
        <TextLink href="https://www.boardeaser.com/" title="Boardeaser" />
        and healthcare systems at
        <TextLink href="https://www.tieto.com/en/" title="Tieto" />.
      </p>

      <h2>Side Projects</h2>
      <p class="mb-4!">
        A collection of some of my open-source side projects, more can be found
        on my
        <TextLink
          href="https://github.com/carlssonemil"
          title="GitHub"
          no-external-favicon
        />.
      </p>
      <ProjectGrid class="md:mb-16" />
    </Inset>
  </Section>
</template>

<script setup>
import Inset from '@/components/Inset.vue'
import ProjectGrid from '@/components/ProjectGrid.vue'
import Section from '@/components/Section.vue'
import TextLink from '@/components/TextLink.vue'
</script>
