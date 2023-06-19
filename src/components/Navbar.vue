<template>
    <div>
        <header>
            <nav class="bg-transparent p-4 shadow">
              <div class="flex justify-between">
                <RouterLink :to="{name:'home'}" class="text-xl text-gray-800 font-semibold border-2 rounded-md p-1 hover:bg-gray-400 ">Home</RouterLink>
                <div class="flex">
                  <RouterLink :to="{name:'by-name'}" class="text-gray-800 mr-4 border-2 rounded-md p-1 hover:bg-gray-400 ">Search Food</RouterLink>
                  <RouterLink :to="{name:'byLetter'}" class="text-gray-800 mr-4 border-2 rounded-md p-1 hover:bg-gray-400">Food by Letter</RouterLink>
                 
                </div>
              </div>
            </nav>
          </header>
          
    </div>
</template>

<script setup >
  
</script>

<style lang="scss" scoped>

</style>