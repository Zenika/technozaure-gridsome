<template>
  <nav class="navbar bg-gray-white px-4 h-20 shadow-lg">
    <div class="container h-full mx-auto flex items-center">
      <div class="w-1/5">
        <g-image width="73px" src="~/assets/imgs/red.png" />
      </div>
      <ul class="w-4/5 h-full flex text-gray-800 text-xl lg:text-3xl">
        <li class="flex flex-1 h-full">
          <a class="m-auto">Home</a>
        </li>
        <li class="flex flex-1 text-center">
          <a class="m-auto">Planning</a>
        </li>
        <li class="flex flex-1 text-center">
          <a class="m-auto">Talks</a>
        </li>
        <li class="flex flex-1 text-center">
          <a class="m-auto">Speakers</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
