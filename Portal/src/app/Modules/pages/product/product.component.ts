import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productForm: FormGroup
  products =[
    {
      Name : 'Dell',
      Version : '8'
    },
    {
      Name : 'Dell',
      Version : '8'
    },
    {
      Name : 'Dell',
      Version : '8'
    }
  ]

  constructor(private _fb: FormBuilder)
  {
    
    this.productForm = _fb.group({
      Name : '',
      Version : ''
    })
        
  }

  ngOnInit(): void {
  }

}
