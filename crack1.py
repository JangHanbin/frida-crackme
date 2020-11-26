import frida, sys


def on_message(message, data):
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)



if __name__ == '__main__':
    package_name = 'owasp.mstg.uncrackable1'
    device = frida.get_usb_device(timeout=10)
    pid = device.spawn(package_name)
    print(pid)
    proc = device.attach(pid)
    script = proc.create_script(open('crack1.js').read())
    try:
        script.on('message', on_message)
        script.load()
        device.resume(pid)
        sys.stdin.read()
    except Exception as e:
        print(e)

