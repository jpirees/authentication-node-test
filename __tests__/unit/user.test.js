const bcrypt = require('bcryptjs');

const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('User', () => {
    beforeEach(async () => {
        await truncate();
    });

    it('should encrypt user password', async () => {
        const user = await User.create({
            name: 'Pir3s',
            phone: '(00)12222-3333',
            email: 'pir3s@github.com',
            password: '123456'
        });

        const compareHash = await bcrypt.compare("123456", user.password_hash);

        expect(compareHash).toBe(true);
    });
});