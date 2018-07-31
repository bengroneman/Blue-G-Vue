<template>
  <div class="bluegdevproject">
    <bprojecttemplate
      projectHeader="Blue G Development"
      projectSubHeader="A Blue G Development Project"
      projectLink="bluegdev.com"
    >
      This was a project built with vuejs
    </bprojecttemplate>
  </div>
</template>
<script>
// @ is an alias to /src
import bprojecttemplate from '@/views/project_template/bProjectTemplate'

export default {
  name: 'bluegdev',
  components: {
    bprojecttemplate
  }
}
</script>
