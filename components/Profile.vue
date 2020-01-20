<template lang="pug">
  div#profile
    h1 Profile
    table.table-auto.w-full
      tbody
        tr
          th
            fa.text-3xl(:icon="['fas', 'pen-fancy']")
          td
            h2 Kaoru Chisen
        tr
          th
            fa.text-3xl(:icon="['fas', 'tools']")
          td
            p Programming lang.
            ul.list-disc.pl-6.mb-4
              li Python
              li C++
              li Haskell
            p Environment
            ul.list-disc.pl-6
              li
                p Arch Linux
                ul.list-square.pl-6
                  li zsh
                  li byobu(tmux)
                  li vim
        tr
          th.text-center(colspan="99")
            fa.text-3xl(:icon="['far', 'id-card']")
        tr.border-b
          td 2017-
          td Shibaura Institute of Technology, Information Science and Engineering
</template>

<style scoped>
tr {
  @apply border-b;
}
th, td {
  @apply px-2 py-2;
}
</style>
