<template>
  <div>
    <ul>
      <li>Написать композиционную функцию useModal, которая будет отвечать за отображение модального окна.  В этой функции: </li>
      <ul>
        <li>Реализовать метод setModalVisibility</li>
        <li>Добавить реактивную переменную showModal, которая отвечает за показ компонента modal-window</li>
      </ul>
    </ul>

    <button @click="setModalVisibility(!showModal)">{{ showModal ? 'Скрыть модалку' : 'Показать модалку' }}</button>
    <modal-window v-if="showModal"></modal-window>
    
  </div>
</template>

<script>
import ModalWindow from './components/ModalWindow.vue'
import useModal from './composables/useModal'

export default {
  setup() {
    const {setModalVisibility, showModal} = new useModal()

  return {
      setModalVisibility,
      showModal
    }
  },
  components: {
    ModalWindow
  }
}
</script>

<style>

</style>
