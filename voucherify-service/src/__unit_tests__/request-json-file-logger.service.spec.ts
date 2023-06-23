import { Test, TestingModule } from '@nestjs/testing';
import { VoucherifyConnectorService } from '../voucherify/voucherify-connector.service';
import { Logger } from '@nestjs/common';
import { RequestJsonFileLogger } from '../misc/request-json-file-logger';

describe('VoucherifyConnectorService', () => {
  let service: RequestJsonFileLogger;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestJsonFileLogger, Logger],
    }).compile();

    service = module.get<RequestJsonFileLogger>(RequestJsonFileLogger);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    service.log('label', {}, {});
  });
});
