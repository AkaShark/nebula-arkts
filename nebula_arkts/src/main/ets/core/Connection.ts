import {Thrift} from '@ohos/thrift';
import GraphServiceClient from '../interface/GraphService'
// import { VerifyClientVersionReq } from "../interface/graph_types"

import { ConnectionOption } from './Models'

export default class Connection {
  private connectionOption: ConnectionOption = {
    host: '',
    prot: 0,
    userName: '',
    password: '',
    space: ''
  };

  constructor(connectionOption: ConnectionOption) {
    this.connectionOption = connectionOption;
  }

  connect() {
    // var transport = new Thrift.Transport("/thrift/service/tutorial/");
    // var protocol  = new Thrift.Protocol(transport);
    // var client    = new CalculatorClient(protocol);

    let transport: ESObject = new Thrift.Transport(this.connectionOption.host);
    let protocol: ESObject = new Thrift.TWebSocketTransport(transport);
    let client: GraphServiceClient = new GraphServiceClient(protocol);
    // let req = new VerifyClientVersionReq();
    // client.send_verifyClientVersion(req, (res: ESObject)=> {
    //   console.log(res)
    // })




  }




}