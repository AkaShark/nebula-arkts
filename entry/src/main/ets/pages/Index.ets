@Entry
@Component
struct Index {

  build() {
    Row() {
      Column() {
        Button("connect")
          .onClick(()=>{
            // click to connect NebulaGraph

          })
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