import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  title = 'shared-app';
    
  p1 = 'Maecenas commodo feugiat mi, et sodales sem tempus vitae. Quisque at libero sem. ' +
    'Cras vitae diam sed erat mollis efficitur. Sed vehicula lobortis ipsum, et ' +
    'aliquam erat pharetra ut. Curabitur accumsan, metus varius malesuada lobortis, ' +
    'odio lorem ultrices nunc, eget scelerisque libero nunc eu risus. Ut a ex dolor. ' +
    'Maecenas mattis urna sed orci posuere hendrerit. Aenean quis condimentum nisi, ' +
    'non aliquet sapien.';

  p2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum augue sed ' +
    'consequat facilisis. Integer et nisl suscipit, porta magna id, mattis erat. ' +
    'Maecenas sed rhoncus mi, egestas consequat sem. Aenean vitae tortor justo. ' +
    'Phasellus congue metus id erat blandit lobortis. Aliquam lobortis libero nulla, ' +
    'at aliquam justo egestas eget. Duis consequat sagittis ipsum, vel interdum nisl ' +
    'faucibus sit amet. Mauris fermentum metus vel mattis posuere. Donec eget lacus ' +
    'mauris. Nunc ultricies congue varius. Donec felis justo, faucibus at urna nec, ' +
    'pellentesque lobortis erat.';

  constructor() { }

  ngOnInit() {
  }
}
