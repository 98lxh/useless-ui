import { defineComponent, Transition } from 'vue'
import { usePickerPanel } from './hooks/usePickerPanel'
import Icon from "./../../icon"
import Button from "./../../button"

const PickerPanel = defineComponent({
  name: 'UsePickerPanel',
  props: {
    visible: {
      type: Boolean
    },
    value: {
      type: Date
    }
  },
  components: {
    Icon
  },
  setup(props) {
    const { visibleDays, days } = usePickerPanel(props)

    return () => (<Transition name="zoom-fade-date">
      <div class="u-date-picker__panel" v-show={props.visible}>
        <div class="panel__nav">
          <div>
            <Icon name="arrow-double-left" />
            <Icon name="arrow-left" />
          </div>
          <div>
            <span>2022</span>
            <span>-</span>
            <span>04</span>
          </div>
          <div>
            <Icon name="arrow-right" />
            <Icon name="arrow-double-right" />
          </div>
        </div>
        <div class="panel__content">
          {days.value.map((col, i) => (
            <div class="days" key={i}>
              {col.map((_, j) => (
                <span class="cell" key={(i) * 7 + (j)}>
                  {visibleDays.value[(i) * 7 + (j)].getDate()}
                </span>
              ))}
            </div>
          ))}
        </div>
        <div class="panel__footer">
          <Button type="primary" size="small">今天</Button>
        </div>
      </div>
    </Transition>)
  }
})

export default PickerPanel
