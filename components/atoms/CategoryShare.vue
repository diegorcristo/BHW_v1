<template>
  <div class="category-share">
    <div class="container-90">
      <div class="row">
        <div class="col has-dflex flow-nw-row justify-between align-bottom">
          <div class="tag-content has-dflex flow-nw-row">
            <Badge stylization="pts" content="50 pts" />
            <Badge
              stylization="sale"
              icon="sale"
              icondescription="Icone de duas pessoas"
              content=" Off"
            />
          </div>
          <ShareButton to="/" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.category-share {
  z-index: 2;
  width: 100%;
  position: absolute;
  top: 1.25rem;
  left: 0;
  display: none;

  .tag-content {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }
}

// iPad - 768px
@media screen and (max-width: 48rem) {
  .category-share {
    display: block;
  }
}
</style>
