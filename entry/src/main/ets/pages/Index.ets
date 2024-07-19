import { Client } from 'nebula_arkts'

@Entry
@Component
struct Index {

  build() {
    Row() {
      Column() {
        Button("connect")
          .onClick(()=>{
            // click to connect NebulaGraph
            let cn = new Client()
            cn.connect()
          })
          .margin({bottom: 20})

        Button("disconnect")
          .onClick(()=> {
            // click to disconnect NebulaGraph
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}