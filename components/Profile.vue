<template>
  <div id="profile">
    <h1>Profile</h1>
    <table class="table-auto w-full">
      <tbody>
        <tr>
          <th>
            <fa :icon="['fas', 'tools']" class="text-3xl" />
          </th>
          <td>
            <p>Programming lang.</p>
            <ul class="list-disc pl-6 mb-4">
              <li>Python</li>
              <li>C++</li>
            </ul>
            <p>Environment</p>
            <ul class="list-disc pl-6">
              <li>
                <p>Arch Linux</p>
                <ul class="list-square pl-6">
                  <li>zsh</li>
                  <li>byobu(tmux)</li>
                  <li>vim</li>
                </ul>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <th colspan="99" class="text-center">
            <fa :icon="['far', 'id-card']" class="text-3xl" />
          </th>
        </tr>
        <tr class="border-b">
          <td>2017-</td>
          <td>Shibaura Institute of Technology, Information Science and Engineering</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
tr {
  @apply border-b;
}
th, td {
  @apply px-2 py-2;
}
</style>
