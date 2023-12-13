<template>
  <div class="container pb-24">
    <PageSection>
      <h1 class="page-head">Lab management course</h1>
      <p class="page-subhead">
        Learn best practices for lab project planning, data storage, research<br
          class="hidden lg:inline"
        />
        documentation, inventory management, lab safety, and more.
      </p>
    </PageSection>
    <PageSection align="left" class="mt-10">
      <p class="text-lg">
        Experience in project management is not a prerequisite for scientific
        leaders, who may have risen the ranks after spending years as individual
        contributors, or come straight out of graduate programs.
      </p>
      <p class="text-lg">
        As a result, scientists starting their own companies or entering
        commercial research often end up making avoidable mistakes.
      </p>
      <p class="text-lg">
        That's why we made the Modern Lab course, in which industry experts
        provide sage advice that took them decades to learn, bridging the gap
        between science and management.
      </p>
    </PageSection>
    <PageSection spacing="pt-12 md:pt-20">
      <nuxt-img
        src="/illustrations/zoom.svg"
        alt="Team"
        width="500"
        class="pb-2"
      />
      <h2 class="page-head">Modern Lab Fellowship</h2>
      <p class="page-subhead">
        Join our 6-week guided lab management course to brainstorm with fellow
        scientists just like you, and learn from industry experts who have
        raised over $100M.
      </p>
      <a
        href="https://tally.so/r/wvzOXw/"
        target="_blank"
        class="primary-btn mt-4 mb-8 inline-flex h-12 px-6"
      >
        Apply to join Modern Lab
      </a>
      <p class="text-lg text-left w-3/4">
        Featuring founders and executives from companies such as
        <strong>Beyond Meat</strong>, <strong>Native Microbials</strong>,
        <strong>Endless West</strong>, and <strong>Plantly</strong>.
      </p>
      <p class="text-lg text-left w-3/4">
        Perks include <strong>1:1 matches</strong>, facilitated
        <strong>small group discussions</strong>, 1-week
        <strong>deep dives</strong> into specific topics,
        <strong>expert talks</strong>, <strong>fireside chats</strong>,
        <strong>panels</strong>, <strong>webinars</strong>, and access to
        <strong>product discounts</strong>.
      </p>
    </PageSection>
    <PageSection spacing="pt-12 md:pt-20">
      <nuxt-img
        src="/illustrations/reading.svg"
        alt="Team"
        width="500"
        class="pb-2"
      />
      <h2 class="page-head">Self-directed lessons</h2>
      <p class="page-subhead">
        Learn the foundational tools and processes that will help you do<br
          class="hidden lg:inline"
        />
        better science, all at your own pace.
      </p>
    </PageSection>
    <PageSection spacing="mt-12" align="left" :max-width="2">
      <Card
        v-for="item in lessons"
        :key="item._id"
        :data="item"
        :link="`/course/${item.slug.current}/`"
        logo
      />
    </PageSection>
  </div>
</template>

<script>
import useSanity from '~/hooks/useSanity'

export default defineComponent({
  setup() {
    const lessons = useSanity({
      query: `
      *[_type=="course_lesson"]{
        ...,
        "body": null,
      }`,

      // attach subtitle in items
      after: (items) => {
        for (let i = 0; i < items.length; i += 1) {
          items[i].subtitle = `Lesson ${i + 1}`
        }
      },
    })

    const page = useSanity({
      query: `*[_type=="page" && slug.current=="courses"]`,
      single: true,
      useMeta: true,
    })

    return {
      page,
      lessons,
    }
  },
  head: {},
})
</script>
