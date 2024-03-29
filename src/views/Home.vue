<template lang="pug">
  v-container
    v-layout(text-center wrap)
      v-row
        v-col(cols=12 md=6).mb-4
          div(style='width: 190px; height: 190px; margin: auto; position: relative').text-left
            TensorMonkey.my-5(styles='height: 150px')

          h1.display-2.font-weight-bold.mb-3 Handsfree.js
          p
            <a href="https://github.com/handsfreejs/handsfree" class="mr-3"><img class="mr-1" src="https://img.shields.io/github/release-pre/handsfreejs/handsfree.svg"></a>
            <a href="https://github.com/handsfreejs/handsfree" class="mr-3"><img class="mr-1" src="https://img.shields.io/github/last-commit/handsfreejs/handsfree.svg"></a>
            <a href="https://github.com/handsfreejs/handsfree"><img class="mr-1" src="https://img.shields.io/github/stars/handsfreejs/handsfree?style=social"></a>
          p
            small With support from the <a href="https://www.cmu.edu/cfa/studio/index.html">STUDIO at CMU</a>, <a href="https://glitch.com/@handsfreejs">Glitch.com</a>, the <a href="https://youtu.be/CJDpF4xUieY?t=58">School of AI</a>, and you!
          p.subheading.font-weight-regular.text-left A wrapper library around web-based computer vision models for the purpose of interacting with the web handsfree. <b>Works with Chrome and Firefox</b>
          p.my-5
            v-btn(v-if='isTracking' color='error' x-large @click='stopWebcam') Stop Webcam
            v-btn(v-else color='primary' x-large @click='startWebcam') Start Webcam
          p
            small Powered by <a href="https://github.com/jeeliz/jeelizWeboji">Jeeliz Weboji</a>

        v-col(cols=12 md=6).mb-4
          iframe(style='margin-top: 100px; max-width: 100%' width="560" height="315" src="https://www.youtube.com/embed/ty081LCcYpc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    v-layout(wrap)
      v-row.my-spread
        v-col.col-12.col-md-8.offset-md-2
          v-card
            v-card-title Quickstart
            v-card-text
              p By default, Handsfree.js is configured for browsing it's page (scrolling, clicking, etc). Here's how to get that going quickly:
              pre
                code.xml(style='width: 100%; background: #2d2b57').
                 &lt;!DOCTYPE html&gt;
                  &lt;head&gt;
                    &lt;!-- Require dependencies --&gt;
                    &lt;script src="https://unpkg.com/handsfree@5.0.4/dist/handsfreejs/handsfree.js">&lt;/script&gt;
                    &lt;link rel="stylesheet" href="https://unpkg.com/handsfree@5.0.4/dist/handsfreejs/handsfree.css"&gt;
                  &lt;/head&gt;
                  &lt;body&gt;
                    &lt;script&gt;
                      // Create a new instance. Use one instance for each camera
                      const handsfree = new Handsfree({})

                      // Create a simple plugin that displays pointer values on every frame
                      Handsfree.use('consoleLogger', (pointer, context) =&gt; {
                        console.log(pointer)
                      })
                      
                      // Start tracking
                      handsfree.start()
                    &lt;/script&gt;
                  &lt;/body&gt;
            v-card-actions
              v-btn.primary(block href='https://github.com/handsfreejs/handsfree/wiki') Explore the docs

    v-layout(wrap)
      v-row.my-spread
        v-col.col-12
          h1 Tutorials
        v-col.col-12.col-md-6
          v-card
            v-card-title Getting Started
            v-card-text
              ul.mb-5
                li Learn how to setup Handsfree.js
                li Explore the <code>handsfree.pointer</code> properties
              <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Wrote an introduction post to Handsfree.js on <a href="https://twitter.com/ThePracticalDev?ref_src=twsrc%5Etfw">@ThePracticalDev</a> : <a href="https://t.co/V7ecyaBtIJ">https://t.co/V7ecyaBtIJ</a><br><br>It (hopefully 😅) has everything you need to get started on adding &quot;face pointers&quot; or face controlled interactions to your apps and web pages, plus a quick roadmap of what&#39;s to come!</p>&mdash; Oz Ramos (@HeyOzRamos) <a href="https://twitter.com/HeyOzRamos/status/1192666398868164608?ref_src=twsrc%5Etfw">November 8, 2019</a></blockquote>
        v-col.col-12.col-md-6
          v-card
            v-card-title YouTube 360
            v-card-text
              ul.mb-5
                li Explore the <code>handsfree.head.rotation</code>
              <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Added a more exciting 360 video so that you can really check out the handsfree controls: <a href="https://t.co/Lmbv5sTIJl">https://t.co/Lmbv5sTIJl</a><br><br>Also wrote a step-by-step tutorial on how to set this demo up with Handsfree.js: <a href="https://t.co/SDXOrpuncb">https://t.co/SDXOrpuncb</a><br><br>Day 6 of <a href="https://twitter.com/hashtag/100DaysofMLCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysofMLCode</a> and <a href="https://twitter.com/hashtag/100DaysofCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysofCode</a> <a href="https://t.co/cJkAP0CtWd">pic.twitter.com/cJkAP0CtWd</a></p>&mdash; Oz Ramos (@HeyOzRamos) <a href="https://twitter.com/HeyOzRamos/status/1193377112100503552?ref_src=twsrc%5Etfw">November 10, 2019</a></blockquote>

    v-layout
      v-row.my-spread
        v-col.col-12.col-md-6.offset-md-3
          v-card
            v-card-title More coming soon ✨
            v-card-text
              p I'm still getting this project and documentation going, but here are some links in the meantime:
              ul
                li
                  a(href='https://twitter.com/heyozramos') Twitter @heyozramos
                li
                  a(href='https://github.com/handsfreejs/handsfree') GitHub
</template>

<script>
import TensorMonkey from '@/components/TensorMonkey'
import { mapState } from 'vuex'

export default {
  components: { TensorMonkey },

  computed: mapState(['isTracking']),

  mounted() {
    this.$store.dispatch('syntaxHighlight')
    this.$store.dispatch('loadScripts', [
      'https://platform.twitter.com/widgets.js'
    ])
  },

  methods: {
    startWebcam() {
      this.$store.dispatch('startTracking')
    },
    stopWebcam() {
      this.$store.dispatch('stopTracking')
    }
  }
}
</script>
