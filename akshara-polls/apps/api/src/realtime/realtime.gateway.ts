import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
@WebSocketGateway({ cors: { origin: '*' } })
export class RealtimeGateway {
  @WebSocketServer() server!: Server;
  @SubscribeMessage('join_room')
  join(@MessageBody() data: { room: string }, @ConnectedSocket() client: Socket) { client.join(data.room); }
  @SubscribeMessage('poll_vote')
  vote(@MessageBody() data: any) { this.server.to(data.room).emit('poll_update', data); }
}
