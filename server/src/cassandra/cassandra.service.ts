import { Injectable } from '@nestjs/common';
import { auth, Client, mapping } from 'cassandra-driver';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CassandraService {
  client: Client;
  mapper: mapping.Mapper;

  public constructor(private configService: ConfigService) {}

  private createClient() {
    const contactPoint = this.configService.get<string>(
      'CASSANDRA_CONTACT_POINT',
    );
    const localDataCenter = this.configService.get<string>(
      'CASSANDRA_LOCAL_DATA_CENTER',
    );
    const keyspace = this.configService.get<string>('CASSANDRA_KEYSPACE');
    const username = this.configService.get<string>('CASSANDRA_USER');
    const password = this.configService.get<string>('CASSANDRA_PASSWORD');

    const authProvider = new auth.PlainTextAuthProvider(username, password);

    this.client = new Client({
      contactPoints: [contactPoint],
      keyspace,
      localDataCenter,
      authProvider,
    });
  }

  createMapper(mappingOptions: mapping.MappingOptions) {
    if (this.client == undefined) {
      this.createClient();
    }
    return new mapping.Mapper(this.client, mappingOptions);
  }
}
