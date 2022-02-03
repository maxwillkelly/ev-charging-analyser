import { Injectable } from '@nestjs/common';
import { auth, Client, mapping } from 'cassandra-driver';

@Injectable()
export class CassandraService {
  client: Client;
  mapper: mapping.Mapper;

  private createClient() {
    this.client = new Client({
      contactPoints: ['0.0.0.0'],
      keyspace: 'ev-charging-analyser',
      localDataCenter: 'local',
      authProvider: new auth.PlainTextAuthProvider('cassandra', 'cassandra'),
    });
  }

  createMapper(mappingOptions: mapping.MappingOptions) {
    if (this.client == undefined) {
      this.createClient();
    }
    return new mapping.Mapper(this.client, mappingOptions);
  }
}
