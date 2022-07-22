import { ConfigService } from '@nestjs/config';

export const getMongoConfig = async (configService: ConfigService) => {
    const envUri = configService.get('MONGO_URI');

	return {
		uri: envUri || getMongoString(configService),
		...getMongoOptions()
	};
};

const getMongoString = (configService: ConfigService) =>
	'mongodb://' +
	configService.get('MONGO_LOGIN') +
	':' +
	configService.get('MONGO_PASSWORD') +
	'@' +
	configService.get('MONGO_HOST') +
	':' +
	configService.get('MONGO_PORT') +
	'/' +
	configService.get('MONGO_AUTHDATABASE');

const getMongoOptions = () => ({
	useNewUrlParser: true,
	useUnifiedTopology: true
});