import click
@click.command('set-flags')
@click.argument('state', type=click.Choice(['on', 'off']))
def set_flags(state):
    print(f"Flags are set to: {state}")
 
commands= [set_flags]


# @click.command('greet-user')
# @click.argument('name')
# def greet_user(name):
#     print(f"Dear {name}! Owner of Khaira.")
# commands = [greet_user]