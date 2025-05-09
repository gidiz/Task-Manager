import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { UsersService } from './users.service';

describe('AuthController', () => {
  let controller: AuthController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            create: jest.fn((dto) => ({
              id: 1,
              ...dto,
              createdAt: new Date(),
            })),
          },
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should register a user', async () => {
    const dto = { email: 'test@example.com', name: 'Test', password: '123456' };
    const result = await controller.register(dto);

    expect(result).toMatchObject(dto);
    expect(service.create).toHaveBeenCalledWith(dto);
  });
});
