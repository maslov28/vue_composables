<template>
  <div>
    <ul>
      <li>Написать композиционную функцию useModal, которая будет отвечать за отображение модального окна.  В этой функции: </li>
      <ul>
        <li>Реализовать метод setModalVisibility</li>
        <li>Добавить реактивную переменную showModal, которая отвечает за показ компонента modal-window</li>
      </ul>
    </ul>

    <button @click.stop="setModalVisibility(!showModal)">{{ showModal ? 'Скрыть модалку' : 'Показать модалку' }}</button>
    <modal-window v-show="showModal" v-click-outside="closeModal"></modal-window>
    
  </div>
</template>

<script>
import ModalWindow from './components/ModalWindow.vue'
import useModal from './composables/useModal'

export default {
  setup() {
    const {setModalVisibility, showModal} = new useModal()
    const closeModal = () => {
        setModalVisibility(false)
    }

  return {
      setModalVisibility,
      showModal,
      closeModal
    }
  },
  components: {
    ModalWindow
  }
}
</script>

<style>

</style>
