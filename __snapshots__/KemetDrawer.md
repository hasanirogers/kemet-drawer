# `KemetDrawer`

#### `renders kemet-drawer correctly`

```html
<section class="off-canvas">
  <nav class="off-canvas__nav">
    <slot name="navigation">
    </slot>
  </nav>
  <div class="off-canvas__pusher">
    <main class="off-canvas__content">
      <div class="off-canvas__wrapper">
        <slot name="content">
        </slot>
      </div>
    </main>
  </div>
</section>

```

