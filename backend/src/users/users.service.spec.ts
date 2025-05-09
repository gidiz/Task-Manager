import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

describe('UsersService', () => {
  let service: UsersService;
  let repo: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repo = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new user', async () => {
    // arrange - מכינים נתוני קלט ותוצאה צפויה
    const dto = {
      email: 'test@example.com',
      name: 'Test User',
      password: '123456',
    };

    const savedUser = {
      id: 1,
      ...dto,
      createdAt: new Date(),
    };

    // mock - מגדירים מה repository מחזיר
    jest.spyOn(repo, 'create').mockReturnValue(savedUser as any);
    jest.spyOn(repo, 'save').mockResolvedValue(savedUser as any);

    // act - קוראים לפונקציה שאנחנו בודקים
    const result = await service.create(dto);

    // assert - בודקים שהתוצאה תואמת למה שציפינו
    expect(result).toEqual(expect.objectContaining(dto));
    expect(result).toHaveProperty('id');
  });
});
