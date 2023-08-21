/*
    이벤트 핸들링
    이벤트 루프는 이벤트를 대기하는 함수들이 이벤트를 대기하고 있다가
    특정 이벤트가 동작하면 이벤트를 처리하는 함수가 실행되는 방식이다.
*/

/* 이벤트 만들기 */
const events = require('events');

/* EventEmitter 생성 */
const eventEmmiter = new events.EventEmitter();

/* 이벤트 핸들러 생성 */
const shoutingHandler = () => {
    console.log('야~호~~!!');

    /* 다른 이벤트 trigger1 */
    eventEmmiter.emit('echo');
};

/* 이벤트 연결 */
eventEmmiter.on('shouting', shoutingHandler);

/* 다른 이벤트 trigger1 */
eventEmmiter.on('echo', () => console.log('야~~~~호~~~~~!!'));

eventEmmiter.emit('shouting');