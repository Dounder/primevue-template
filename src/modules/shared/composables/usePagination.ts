import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export const usePagination = () => {
  const route = useRoute()
  const page = ref(Number(route.query.page) || 1)

  const handleScroll = () => {
    const container = document.querySelector('#main-content')
    if (!container) return

    container.scrollTo({ top: 0, behavior: 'smooth' })
  }

  watch(
    () => route.query.page,
    (newPage) => {
      page.value = Math.max(1, Number(newPage) || 1)

      handleScroll()
    }
  )

  return {
    //* props
    page
  }
}
