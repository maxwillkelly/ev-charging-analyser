import { Injectable, OnModuleInit } from '@nestjs/common';
import { mapping } from 'cassandra-driver';
import { Location } from './location.model';
import { CassandraService } from 'src/cassandra/cassandra.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LocationRepository implements OnModuleInit {
  constructor(
    private cassandraService: CassandraService,
    private configService: ConfigService,
  ) {}

  LocationMapper: mapping.ModelMapper<Location>;

  onModuleInit() {
    const keyspace = this.configService.get<string>('CASSANDRA_KEYSPACE');

    const mappingOptions: mapping.MappingOptions = {
      models: {
        Location: {
          keyspace,
          tables: ['location'],
          mappings: new mapping.UnderscoreCqlToCamelCaseMappings(),
        },
      },
    };

    this.LocationMapper = this.cassandraService
      .createMapper(mappingOptions)
      .forModel('Location');
  }

  async getLocations() {
    return (await this.LocationMapper.findAll()).toArray();
  }
}
