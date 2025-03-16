import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private readonly config: ConfigService) {}

  get nodeEnv(): string {
    return this.config.get<string>('NODE_ENV') ?? 'development';
  }

  get appPort(): number {
    return this.config.get<number>('APP_PORT') ?? 3000;
  }

  get dbHost(): string {
    return this.config.get<string>('DB_HOST') ?? 'localhost';
  }

  get dbPort(): number {
    return this.config.get<number>('DB_PORT') ?? 5432;
  }

  get dbUsername(): string {
    return this.config.get<string>('DB_USERNAME') ?? 'postgres';
  }

  get dbPassword(): string {
    return this.config.get<string>('DB_PASSWORD') ?? 'postgres';
  }

  get dbDatabase(): string {
    return this.config.get<string>('DB_DATABASE') ?? 'soroteca_db';
  }

  get dbDatabaseTest(): string {
    return this.config.get<string>('DB_DATABASE_TEST') ?? 'soroteca_test';
  }

  get emailHost(): string {
    return this.config.get<string>('EMAIL_HOST') ?? 'smtp.example.com';
  }

  get emailUser(): string {
    return this.config.get<string>('EMAIL_USER') ?? 'user@example.com';
  }

  get emailPass(): string {
    return this.config.get<string>('EMAIL_PASS') ?? 'password';
  }

  get jwtExpiresIn(): number {
    return this.config.get<number>('JWT_EXPIRES_IN') ?? 3600;
  }

  get jwtSecret(): string {
    return this.config.get<string>('JWT_SECRET') ?? 'secret';
  }
  
  get sqliteDatabase(): string {
    return this.config.get<string>('SQLITE_DATABASE') ?? 'soroteca.db';
  }
  
  get sqliteDatabaseTest(): string {
    return this.config.get<string>('SQLITE_DATABASE_TEST') ?? 'soroteca-test.db';
  }
  
  get sqliteInMemory(): boolean {
    return this.config.get<boolean>('SQLITE_IN_MEMORY') ?? false;
  }
}
