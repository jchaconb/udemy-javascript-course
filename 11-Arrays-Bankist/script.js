'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

let currentAccount;

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; // Clean previous content

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">
          ${i + 1} ${type}
        </div>
        <div class="movements__value">${mov}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUsernames = function (accounts) {
  accounts.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = acc.balance + ' €';
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumIn.textContent = `${incomes}€`;
  labelSumOut.textContent = `${Math.abs(out)}€`;
  labelSumInterest.textContent = `${interest}€`;
};

const clearLoginFields = function () {
  inputLoginUsername.value = '';
  inputLoginPin.value = '';
  inputLoginPin.blur();
};

const clearTransferFields = function () {
  inputTransferTo.value = '';
  inputTransferAmount.value = '';
  inputTransferAmount.blur();
};

const clearCloseAccountFields = function () {
  inputClosePin.value = '';
  inputCloseUsername.value = '';
  inputClosePin.blur();
};

const clearRequestLoanField = function () {
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
};

const greetUser = owner => {
  if (!owner) return (labelWelcome.textContent = 'Log in to get started');

  const firstName = owner.split(' ')[0];
  labelWelcome.textContent = `Welcome back, ${firstName}`;
};

const showAppUI = () => {
  containerApp.style.opacity = 100;
};

const hideAppUI = () => {
  containerApp.style.opacity = 0;
};

const deleteAccount = function (index) {
  accounts.splice(index, 1);
};

const updateUserDashboard = account => {
  displayMovements(account.movements);
  calcDisplayBalance(account);
  calcDisplaySummary(account);
};

const transferMoney = function (amount, receiverAccount) {
  currentAccount.movements.push(-amount);
  receiverAccount.movements.push(amount);
};

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  const username = inputLoginUsername.value;
  const pin = Number(inputLoginPin.value);

  const userAccount = accounts.find(acc => acc.username === username);

  if (userAccount?.pin === pin) {
    currentAccount = userAccount;
    greetUser(currentAccount.owner);
    showAppUI();
    clearLoginFields();
    updateUserDashboard(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const username = inputTransferTo.value;

  const receiverAccount = accounts.find(acc => acc.username === username);

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount !== currentAccount.username
  ) {
    clearTransferFields();
    transferMoney(amount, receiverAccount);
    updateUserDashboard(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  const pin = Number(inputClosePin.value);
  const username = inputCloseUsername.value;

  if (currentAccount.username === username && currentAccount.pin === pin) {
    const accountIndex = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    deleteAccount(accountIndex);
    greetUser();
    hideAppUI();
  }

  clearCloseAccountFields();
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);

    clearRequestLoanField();
    updateUserDashboard(currentAccount);
  }
});

let isSorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  isSorted = !isSorted;

  displayMovements(currentAccount.movements, isSorted);
});

// Start
createUsernames(accounts);

const html = `
  <p style="
    margin-top: 1%;
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
    padding: 8px 12px;
    border-radius: 5px;
    display: block;
    font-size: 14px;
    border: 1px solid #ddd;
    margin-left: auto;
    text-align: right;
    width: max-content;
  ">
    <strong>Test Login (user / PIN):</strong><br>
    👨‍🦰 <b>js</b>: 1111 &nbsp;|  
    👩‍🦰 <b>jd</b>: 2222 &nbsp;|  
    🧑‍🦰 <b>stw</b>: 3333 &nbsp;|  
    👨‍🦳 <b>ss</b>: 4444
  </p>
`;
containerApp.insertAdjacentHTML('beforebegin', html);


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

console.log('-------- The New findLast and findLastIndex Methods --------');
const lastWithdrawal = movements.findLast(mov => mov < 0);
console.log(movements);
console.log(lastWithdrawal); // -130

const lastestLargeMovementIndex = movements.findLastIndex(
  mov => Math.abs(mov) > 1000
);
console.log(lastestLargeMovementIndex); // 7

console.log('-------- some and every --------');

console.log('== EQUALITY ==');
console.log(movements.includes(-130));

console.log('== CONDITION ==');
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

console.log('== EVERY ==');
console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movements.every(mov => mov > 0)); // false

console.log(account4.movements); // [430, 1000, 700, 50, 90]
console.log(account4.movements.every(mov => mov > 0)); // true

console.log('== Separate callback ==');
const deposit = mov => mov > 0;
console.log(movements.every(deposit)); // false
console.log(account4.movements.every(deposit)); // true

console.log('-------- flat and flatMap --------');

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat()); // [Array(2), 3, 4, Array(2), 7, 8]
console.log(arrDeep.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8]

console.log('== flat ==');
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance); // 17840

console.log('== flatMap ==');
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2); // 17840

console.log('-------- Sorting Arrays --------');

console.log('== Strings ==');
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); //  ['Adam', 'Jonas', 'Martha', 'Zach']
console.log(owners); //  ['Adam', 'Jonas', 'Martha', 'Zach']

console.log('== Numbers ==');
console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)
// Ascending
// console.log(
//   movements.sort((a, b) => {
//     if (a > b) return 1;
//     if (b > a) return -1;
//   })
// ); // [-650, -400, -130, 70, 200, 450, 1300, 3000]

movements.sort((a, b) => a - b);
console.log(movements); // [-650, -400, -130, 70, 200, 450, 1300, 3000]

// Descending
// console.log(
//   movements.sort((a, b) => {
//     if (a > b) return -1;
//     if (b > a) return 1;
//   })
// ); // [3000, 1300, 450, 200, 70, -130, -400, -650]

movements.sort((a, b) => b - a);
console.log(movements); // [3000, 1300, 450, 200, 70, -130, -400, -650]

console.log('-------- Array Grouping --------');

const groupedMovements = Object.groupBy(movements, movement =>
  movement > 0 ? 'deposits' : 'withdrawals'
);
console.log(groupedMovements); // {deposits: [3000, 1300, 450, 200, 70], withdrawals: [-130, -400, -650]}

const groupedByActivity = Object.groupBy(accounts, account => {
  const movementCount = account.movements.length;

  if (movementCount >= 8) return 'very active';
  if (movementCount >= 4) return 'active';
  if (movementCount >= 1) return 'moderate';
  return 'inactive';
});

console.log(groupedByActivity);

console.log('-------- More Ways of Creating and Filling Arrays --------');

console.log([1, 2, 3, 4, 5, 6, 7]); // [1, 2, 3, 4, 5, 6, 7]
console.log(new Array(1, 2, 3, 4, 5, 6)); // [1, 2, 3, 4, 5, 6]

console.log('== Empty arrays + fill method');

const x = new Array(7);
console.log(x); // [empty × 7]
console.log(x.map(() => 5)); // [empty × 7]

// x.fill(1);
// console.log(x); //  [1, 1, 1, 1, 1, 1, 1]

// x.fill(1, 3);
// console.log(x); // [empty × 3, 1, 1, 1, 1]

// x.fill(1, 3, 5);
// console.log(x); // [empty × 3, 1, 1, empty × 2]

let arr2 = [1, 2, 3, 4, 5, 6, 7];
arr2.fill(23, 4, 6);
console.log(arr2); // [1, 2, 3, 4, 23, 23, 7]

console.log('== Array.from ==');
const y = Array.from({ length: 7 }, () => 1);
console.log(y); // [1, 1, 1, 1, 1, 1, 1]

const z = Array.from({ length: 7 }, (_, index) => index + 1);
console.log(z); // [1, 2, 3, 4, 5, 6, 7]


