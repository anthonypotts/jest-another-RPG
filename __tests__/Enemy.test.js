const Enemy = require('../lib/Enemy.js');
const Potion = require('../lib/Potion.js');

jest.mock('../lib/Potion.js');

test('creates an enemy object', () => {
    const enemy = new Enemy('goblin', 'sword');

    expect(enemy.name).toBe('goblin');
    expect(enemy.weapon).toBe('sword');
    expect(enemy.health).toEqual(expect.any(Number));
    expect(enemy.strength).toEqual(expect.any(Number));
    expect(enemy.agility).toEqual(expect.any(Number));
    expect(enemy.potion).toEqual(expect.any(Object));
});

test('get enemys health value', () => {
    const enemy = new Enemy ('goblin', 'sword');

    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
});

test('checks if enemy is alive or not', () => {
    const enemy = new Enemy ('goblin', 'sword');

    expect(enemy.isAlive()).toBeTruthy();

    enemy.health = 0;
    
    expect(enemy.isAlive()).toBeFalsy();
});

test('subtracts from enemys health', () => {
    const enemy = new Enemy ('goblin', 'sword');
    const oldHealth = enemy.health;

    enemy.reduceHealth(5);

    expect(enemy.health).toBe(oldHealth - 5);

    enemy.reduceHealth(99999);

    expect(enemy.health).toBe(0);
});

test("gets enemy's attack value", () => {
    const enemy = new Enemy ('goblin', 'sword');
    enemy.strength = 10;

    expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
});

test('gets a description of the enemy', () => {
    const enemy = new Enemy('goblin', 'sword');
  
    expect(enemy.getDescription()).toEqual(expect.stringContaining('goblin'));
    expect(enemy.getDescription()).toEqual(expect.stringContaining('sword'));
});

// test('adds a potion to the inventory', () => {
//     const player = new Player('Dave');
//     const oldCount = player.inventory.length;
  
//     player.addPotion(new Potion());
  
//     expect(player.inventory.length).toBeGreaterThan(oldCount);
// });

// test('uses a potion from inventory', () => {
//     const player = new Player ('Dave');
//     player.inventory = [new Potion(), new Potion (), new Potion ()];
//     const oldCount = player.inventory.length;

//     player.usePotion(1);

//     expect(player.inventory.length).toBeLessThan(oldCount);
// });