<template>
  <FrontendLayout>
    <template #meta>
      <!-- <script type="application/ld+json" class="rank-math-schema-pro"> -->
      <!-- {"@context":"https://schema.org",
                "@graph":[{"@type":["NewsMediaOrganization","Organization"],"@id":"https://dailygists.co/#organization","name":"Daily Gist","url":"https://dailygists.co","logo":{"@type":"ImageObject","@id":"https://dailygists.co/#logo","url":"http://dailygists.co/wp-content/uploads/2022/07/D12B636A-DCB6-4BB5-9FD0-3C35E493C9D3.png","contentUrl":"http://dailygists.co/wp-content/uploads/2022/07/D12B636A-DCB6-4BB5-9FD0-3C35E493C9D3.png","caption":"Daily Gist","inLanguage":"en-US","width":"980","height":"255"}},{"@type":"WebSite","@id":"https://dailygists.co/#website","url":"https://dailygists.co","name":"Daily Gist","publisher":{"@id":"https://dailygists.co/#organization"},"inLanguage":"en-US"},{"@type":"ImageObject","@id":"https://dailygists.co/wp-content/uploads/2022/07/0dc787696c6a9ea1.png","url":"https://dailygists.co/wp-content/uploads/2022/07/0dc787696c6a9ea1.png","width":"1200","height":"800","inLanguage":"en-US"},{"@type":"WebPage","@id":"https://dailygists.co/ask-dailygists/%d1%81elebrity-biographies/adrian-blake-enscoes-biography-age-height-birthday-partner/#webpage","url":"https://dailygists.co/ask-dailygists/%d1%81elebrity-biographies/adrian-blake-enscoes-biography-age-height-birthday-partner/","name":"Adrian Blake Enscoe\u2019s biography: age, height, birthday, partner - DailyGists","datePublished":"2022-07-20T05:27:02+01:00","dateModified":"2022-07-23T07:34:21+01:00","isPartOf":{"@id":"https://dailygists.co/#website"},"primaryImageOfPage":{"@id":"https://dailygists.co/wp-content/uploads/2022/07/0dc787696c6a9ea1.png"},"inLanguage":"en-US"},{"@type":"Person","@id":"https://dailygists.co/author/nathan/","name":"Nathan","url":"https://dailygists.co/author/nathan/","image":{"@type":"ImageObject","@id":"https://secure.gravatar.com/avatar/4319fc12cd402dd269b600b33ae5c059?s=96&amp;d=mm&amp;r=g","url":"https://secure.gravatar.com/avatar/4319fc12cd402dd269b600b33ae5c059?s=96&amp;d=mm&amp;r=g","caption":"Nathan","inLanguage":"en-US"},"sameAs":["https://dailygists.co"],"worksFor":{"@id":"https://dailygists.co/#organization"}},{"headline":"Adrian Blake Enscoe\u2019s biography: age, height, birthday, partner - DailyGists","description":"Actor and musician Adrian Blake Enscoe hails from the United States and works professionally in both fields. The character of Austin Dickinson, which he","datePublished":"2022-07-20T05:27:02+01:00","dateModified":"2022-07-23T07:34:21+01:00","image":{"@id":"https://dailygists.co/wp-content/uploads/2022/07/0dc787696c6a9ea1.png"},"author":{"@id":"https://dailygists.co/author/nathan/","name":"Nathan"},"@type":"NewsArticle","copyrightYear":"2022","name":"Adrian Blake Enscoe\u2019s biography: age, height, birthday, partner - DailyGists","@id":"https://dailygists.co/ask-dailygists/%d1%81elebrity-biographies/adrian-blake-enscoes-biography-age-height-birthday-partner/#schema-3299","isPartOf":{"@id":"https://dailygists.co/ask-dailygists/%d1%81elebrity-biographies/adrian-blake-enscoes-biography-age-height-birthday-partner/#webpage"},"publisher":{"@id":"https://dailygists.co/#organization"},"inLanguage":"en-US","mainEntityOfPage":{"@id":"https://dailygists.co/ask-dailygists/%d1%81elebrity-biographies/adrian-blake-enscoes-biography-age-height-birthday-partner/#webpage"}},{"@type":"VideoObject","name":"Adrian Blake Enscoe on Season 1 of &#039;Dickinson&#039; | TV Insider","description":"Adrian Blake Enscoe talks to us about what to expect from the first season of Apple TV+&#039;s series, Dickinson and how the show is different from most biopic sh...","uploadDate":"2019-10-29","thumbnailUrl":"https://dailygists.co/wp-content/uploads/2022/07/0dc787696c6a9ea1.png","embedUrl":"https://www.youtube.com/embed/Tro5dPfXPzs","duration":"PT4M47S","width":"1280","height":"720","isFamilyFriendly":"True","@id":"https://dailygists.co/ask-dailygists/%d1%81elebrity-biographies/adrian-blake-enscoes-biography-age-height-birthday-partner/#schema-3300","isPartOf":{"@id":"https://dailygists.co/ask-dailygists/%d1%81elebrity-biographies/adrian-blake-enscoes-biography-age-height-birthday-partner/#webpage"},"publisher":{"@id":"https://dailygists.co/#organization"},"inLanguage":"en-US"}]} -->
      <!-- </script> -->

      <title>{{ article.title }}</title>
      <meta name="description" :content="article.meta.meta_description" />
      <meta
        name="robots"
        content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
      />
      <link rel="canonical" :href="url" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta property="og:title" :content="article.meta.opengraph_title" />
      <meta
        property="og:description"
        :content="article.meta.opengraph_description"
      />
      <meta property="og:url" :content="url" />
      <meta property="og:site_name" content="DailyGists" />
      <meta
        property="article:section"
        :content="article.channels_relation[0].name"
      />
      <meta property="og:image" :content="article.meta.opengraph_image_url" />
      <meta
        property="og:image:secure_url"
        :content="article.meta.opengraph_image_url"
      />
      <meta
        property="og:image:width"
        :content="article.meta.opengraph_image_width"
      />
      <meta
        property="og:image:height"
        :content="article.meta.opengraph_image_height"
      />
      <meta property="og:image:alt" :content="article.meta.opengraph_title" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="article:published_time" :content="article.approved_at" />
      <meta property="article:modified_time" :content="article.updated_at" />
      <meta name="twitter:card" :content="article.meta.twitter_cardtype" />
      <meta name="twitter:title" :content="article.meta.twitter_title" />
      <meta
        name="twitter:description"
        :content="article.meta.twitter_description"
      />
      <meta name="twitter:image" :content="article.meta.twitter_image_url" />
      <meta name="twitter:label1" content="Written by" />
      <meta name="twitter:data1" :content="article.author_relation.penname" />
      <meta name="twitter:label2" content="Time to read" />
      <meta name="twitter:data2" :content="readTime + ' minutes'" />
    </template>
    <template #header>
      <div class="flex justify-between items-center w-full">
        <div class="flex items-center space-x-2 relative">
          <img
            :src="article.channels_relation[0].image"
            class="w-8 h-8 rounded-full my-4"
          />
          <span class=""> Published in </span>
          <span class="flex flex-wrap space-x-2">
            <div v-for="channel in article.channels_relation" :key="channel.id">
              <span
                class="capitalize text-white rounded px-2 py-[1px]"
                :style="`background-color: ${channel.color}`"
              >
                {{ channel.name }}</span
              >
            </div>
          </span>
          <span class="absolute top-10 left-10 flex w-full space-x-2">
            <ago
              :datess="article.approved_at"
              classes=" text-xs  text-gray-300"
              befor=""
              v-if="article.approved_at"
            ></ago>
            <span class="text-xs text-red-500" v-if="article.declined_at"
              >Article Delined</span
            >
            <span class="text-xs text-gray-300" v-if="!article.approved_at"
              >NOT APPROVED Yet</span
            >
          </span>
        </div>
        <Approvearticle :slug="article.slug" v-if="$page.props.auth.isAdmin"/>
      </div>
    </template>
    <!-- <template #aside>
            this is the aside
        </template> -->

    <h1 class="text-[32px] font-bold leading-10 break-words">
      {{ article.title }}
    </h1>
    <article class="article-area">
      <div v-if="article.hero_image">
        <ZoomImages
          :src="article.hero_image"
          classs="w-full  max-h-[190px] sm:max-h-[290px] rounded my-4 cursor-zoom-in my-8 w-full object-cover   duration-500 ease-in-out"
        >
        </ZoomImages>
      </div>
      <div v-html="article.body" class="w-full"></div>

      <div class="flex items-center">
        <span class="font-bold w-2/12">Tags</span>
        <div
          class="
            w-10/12
            flex
            items-center
            flex-wrap
            justify-end
            space-x-2
            py-2
            px-2
          "
        >
          <span v-for="tag in tags" :key="tag.id">
            <span
              class="
                capitalize
                inline-block
                text-sm text-gray-900
                bg-gray-100
                border border-gray-200
                rounded
                py-1.5
                px-3
                leading-none
              "
            >
              {{ tag.name }}
            </span>
          </span>
        </div>
      </div>
    </article>
    <ClapCommentShare type="articles" :data="article" />

    <Subscribe :user="article.author_relation" />
    <Author :user="article.author_relation" />

    <template #recommended>
      <PostsFromAuthor :user="article.author_relation" />

      <RelatedCategoryArticle :trending="trendingArticles">
      </RelatedCategoryArticle>
    </template>

    <!-- <template #aside>
      <label class="text-center space-x-2 pb-5 border-b font-bold text-xl"
        >Table Of Content</label
      >
      <vue-toc target=".article-area" class="toc" />
    </template> -->
  </FrontendLayout>
</template>

<script setup>
import { Link, usePage} from "@inertiajs/inertia-vue3";
import { computed } from "vue";
import FrontendLayout from "@/Layouts/FrontendLayout.vue";
import { defineAsyncComponent } from "vue";

const Ago = defineAsyncComponent(() => import("@/Components/Ago.vue"));
const Approvearticle = defineAsyncComponent(() =>
  import("./approvearticle.vue")
);
const ClapCommentShare = defineAsyncComponent(() =>
  import("@/Components/Frontend/ClapCommentShare.vue")
);
const RelatedCategoryArticle = defineAsyncComponent(() =>
  import("@/Components/Frontend/RelatedCategoryArticle.vue")
);
const PostsFromAuthor = defineAsyncComponent(() =>
  import("@/Components/Frontend/PostsFromAuthor.vue")
);
const Author = defineAsyncComponent(() =>
  import("@/Components/Frontend/Author.vue")
);
const Footer = defineAsyncComponent(() =>
  import("@/Layouts/partials/footer.vue")
);
const ZoomImages = defineAsyncComponent(() =>
  import("@/Components/ZoomImages.vue")
);
const Subscribe = defineAsyncComponent(() =>
  import("@/Components/Frontend/Subscribe.vue")
);

const url = computed(() => usePage().props.value.ziggy.location);
const article = computed(() => usePage().props.value.article);
const trendingArticles = computed(() => usePage().props.value.trendingArticles);
const tags = computed(() => usePage().props.value.tags);
const readTime = computed(() => usePage().props.value.readTime);
const likes = computed(
  () => usePage().props.value.article.likes_relation_count
);
</script>

<style>
#section figure img {
  @apply rounded-md;
}

#section figure {
  @apply py-4;
}

#section blockquote {
  @apply my-4 mx-6 mx-1 font-bold border-l p-2 rounded-lg border-it-h1 shadow-lg text-greenish;
}

#section li {
  @apply my-2;
}

#section ul {
  @apply my-2;
}

#section ol {
  @apply my-2;
}

#section figure figcaption {
  @apply px-12 py-4 text-sm text-gray-400;
}

.toc {
  width: 300px;
  padding: 0 30px;
}

.toc-2 {
  @apply text-base py-2 font-bold;
}
.toc-3 {
  @apply py-2;
}
</style>