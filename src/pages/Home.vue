<template>
  <Section>
    <Inset format>
      <h2>About</h2>
      <p>
        I'm a software developer from Sweden 🇸🇪, currently working at
        <TextLink href="https://www.boardeaser.com/" title="Boardeaser" />,
        where we simplify the everyday life for boards and executives.
        Previously, I worked on health care systems at
        <TextLink href="https://www.tietoevry.com/en/" title="Tietoevry" />.
      </p>

      <h2>Side Projects</h2>
      <p class="mb-4!">
        A collection of some of my side projects, more can be found on my
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
