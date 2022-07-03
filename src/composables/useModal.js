import {ref} from 'vue'

export default function useModal() {
  const setModalVisibility = (isShow) => {
    showModal.value = isShow
  }
  const showModal = ref(false)

  return {
    setModalVisibility,
    showModal
  }
}