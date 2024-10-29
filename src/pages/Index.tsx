import { defineComponent } from 'vue'
import {
  QBtn as Btn,
  QCard as Card,
  QCardActions as CardActions,
  QCardSection as CardSection
} from 'quasar'

export default defineComponent({
  setup() {
    const QCard = Card as any
    const QCardActions = CardActions as any
    const QBtn = Btn as any
    const QCardSection = CardSection as any

    function renderButton(label: string) {
      return <QBtn color={'blue'} label={label} />
    }

    return () => (
      // <QCard style={{ width: '100%', 'max-width': '500px' }}>
      //   {/* <QCardSection>
      //     <div class="text-h6">Our Changing Planet</div>
      //     <div class="text-subtitle2">by John Doe</div>
      //   </QCardSection> */}

      //   <TextComponent message={'Message Test Here!'} />

      //   {/* <QCardActions>{renderButton('button label')}</QCardActions> */}
      // </QCard>
      <div></div>
    )
  }
})
