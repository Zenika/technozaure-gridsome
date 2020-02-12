<template>
  <Layout>
    <div class="home flex flex-col lg:flex-row h-full">
      <div
        class="flex lg:w-2/3 h-full min-h-1/3 bg-cover bg-center home__photo"
      ></div>
      <div class="flex lg:w-1/3 h-full bg-gray-800">
        <article class="flex flex-col items-center px-12 py-12 lg:py-20">
          <header class="mb-12 text-white text-center font-bold">
            <h1 class="text-2xl lg:text-4xl">
              {{ $page.allEvent.edges[0].node.name }}
            </h1>
            <span class="text-md lg:text-xl">
              La conférence de l’ouest
            </span>
          </header>
          <section class="mb-12 w-full">
            <a
              class="inline-block w-full rounded-md bg-white text-center text-gray-800 shadow-2xl text-md lg:text-2xl font-bold py-5 px-5"
            >
              Voir le programme
            </a>
          </section>
          <section class="flex flex-1 items-center justify-center">
            <p class="text-md lg:text-xl text-white">
              L’idée de la technozaure est de nous rassembler pendant une
              journée sur différents sujets: des présentations techniques, des
              REX client, des livecodings et des ateliers sur 1 format unique
              (25min + 5min de Q&A).
            </p>
          </section>
        </article>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query {
  allEvent {
    edges {
      node {
        name
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style lang="postcss" scoped>
.home__photo {
  background-image: url('~@/assets/imgs/home-md.jpg');
}

@screen md {
  .home__photo {
    background-image: url('~@/assets/imgs/home.jpg');
  }
}

@screen lg {
  .home__photo {
    background-image: url('~@/assets/imgs/home.jpg');
  }
}
</style>
