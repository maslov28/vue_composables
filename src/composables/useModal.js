import {ref} from 'vue'

export default function useModal() {
  const setModalVisibility = () => {
    showModal.value = !showModal.value
  }
  const showModal = ref(false)

  return {
    setModalVisibility,
    showModal
  }
}